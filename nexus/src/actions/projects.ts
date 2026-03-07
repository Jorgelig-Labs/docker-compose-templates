'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        team: true,
        prds: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    return projects as any[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProject(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        team: true,
        prds: true,
      },
    });
    return project as any;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export async function createProject(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const repositoryUrl = formData.get('repositoryUrl') as string;
    const teamId = formData.get('teamId') as string;
    const status = formData.get('status') as string || 'draft';

    if (!name) {
      return { error: 'Name is required' };
    }

    const projectData: any = {
      name,
      description: description || '',
      status,
    };

    if (repositoryUrl) projectData.repositoryUrl = repositoryUrl;
    if (teamId) projectData.teamId = teamId;

    const project = await prisma.project.create({
      data: projectData,
    });

    revalidatePath('/projects');
    return { success: true, project };
  } catch (error) {
    console.error('Error creating project:', error);
    return { error: 'Failed to create project' };
  }
}

export async function updateProject(id: string, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const status = formData.get('status') as string;

    const project = await prisma.project.update({
      where: { id },
      data: {
        name,
        description,
        status: status as any,
      },
    });

    revalidatePath('/projects');
    revalidatePath(`/projects/${id}`);
    return { success: true, project };
  } catch (error) {
    console.error('Error updating project:', error);
    return { error: 'Failed to update project' };
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    });

    revalidatePath('/projects');
    return { success: true };
  } catch (error) {
    console.error('Error deleting project:', error);
    return { error: 'Failed to delete project' };
  }
}
