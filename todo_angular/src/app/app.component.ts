import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Add user Input : https://angular.io/guide/user-input
  // (ctrl + f sur "Get user input from a template reference variable" pour voir l'explication)

  // Ici j'ai mon textContent qui prend la valeur de mon input
  @Input() textContent: string = "";
  // J'ai ma liste de todos qui est vide au départ
  listOfTodos: string[] = [];

// J'ai mon titre de l'application que j'ai utilisé sur ma vu pur me tester le fonctionnement des variables dans Angular
  title = 'todo_angular';

  // Ma fonction qui me permet de mettre à jour mon textContent à chaque lettre taper
  handleChange(text: string) {
    this.textContent += text;
  }

  // Ma fonction qui me permet d'ajouter ma nouvelle tâche à ma list
  addItem(todo: string) {
    this.listOfTodos.push(todo)
  }

  // Ma fonction qui me permet de supprimer ma tâche
  deleteTodo(index: number) {
    this.listOfTodos.splice(index, 1);
  }
}
