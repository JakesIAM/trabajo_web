import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
  projects: any[] = [];

  ngOnInit() {
    // Carga proyectos desde localStorage o crea algunos si no existen
    const stored = localStorage.getItem('projects');
    if (stored) {
      this.projects = JSON.parse(stored);
    } else {
      this.projects = [
        {
          id: 1,
          name: 'Plataforma E-commerce',
          client: 'Cliente Alfa',
          priority: 'Alta',
          status: 'En Progreso',
          progress: 50,
          comments: [
            { text: 'Me gusta el avance, revisar colores.', date: '2025-05-02' }
          ]
        },
        {
          id: 2,
          name: 'App Móvil Fitness',
          client: 'Cliente Beta',
          priority: 'Media',
          status: 'Pendiente',
          progress: 0,
          comments: []
        }
      ];
      localStorage.setItem('projects', JSON.stringify(this.projects));
    }
  }

  // Método para actualizar el proyecto en la lista y en localStorage (opcional si quieres manejo centralizado)
  updateProject(updatedProject: any) {
    const index = this.projects.findIndex(p => p.id === updatedProject.id);
    if (index !== -1) {
      this.projects[index] = updatedProject;
      localStorage.setItem('projects', JSON.stringify(this.projects));
    }
  }
}