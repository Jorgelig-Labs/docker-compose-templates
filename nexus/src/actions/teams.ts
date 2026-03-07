'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getTeams() {
  try {
    const teams = await prisma.team.findMany({
      include: {
        roles: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return teams as any[];
  } catch (error) {
    console.error('Error fetching teams:', error);
    return [];
  }
}

export async function getTeam(id: string) {
  try {
    const team = await prisma.team.findUnique({
      where: { id },
      include: {
        roles: true,
      },
    });
    return team;
  } catch (error) {
    console.error('Error fetching team:', error);
    return null;
  }
}

export async function createTeam(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    if (!name) {
      return { error: 'Name is required' };
    }

    const team = await prisma.team.create({
      data: {
        name,
        description: description || '',
      },
    });

    revalidatePath('/teams');
    return { success: true, team };
  } catch (error) {
    console.error('Error creating team:', error);
    return { error: 'Failed to create team' };
  }
}

export async function updateTeam(id: string, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    const team = await prisma.team.update({
      where: { id },
      data: {
        name,
        description,
      },
    });

    revalidatePath('/teams');
    revalidatePath(`/teams/${id}`);
    return { success: true, team };
  } catch (error) {
    console.error('Error updating team:', error);
    return { error: 'Failed to update team' };
  }
}

export async function deleteTeam(id: string) {
  try {
    await prisma.team.delete({
      where: { id },
    });

    revalidatePath('/teams');
    return { success: true };
  } catch (error) {
    console.error('Error deleting team:', error);
    return { error: 'Failed to delete team' };
  }
}
