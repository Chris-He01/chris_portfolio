import { Component, ChangeDetectionStrategy } from '@angular/core';

enum TechStacks {
  frontEnd = "FRONT_END",
  backEnd = "BACK_END",
  others = "OTHERS",
  dataScience = 'DATA_SCIENCE'
}

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolsListComponent {
  TechStacks = TechStacks;
  techOrders = [TechStacks.frontEnd, TechStacks.backEnd, TechStacks.dataScience, TechStacks.others]
  techs = {
    [TechStacks.frontEnd]: ["Angular", " React", " React", "next.js", " Native", " Redux", " Javascript/Typescript", " HTML", " CSS", " SCSS", " Gulp", " jQuery", " Bootstrap", " Angular ", "Material", " PrimeNg", " JavaFx", " Android"],
    [TechStacks.dataScience]: ["mysql", "zotero", "phpmyadmin", "Python", "  Numpy", "  Pandas", "  matplotlib", "  Scikit-learn", "  Tensorflow", "  Keras"],
    [TechStacks.backEnd]: ["GOlang", "git", "Node", " Objection.js", " Socket.io", " Java", " Spring", " Spring Boot", " PHP", " PostgresSQL", " MongoDB", " Django", " SQL"],
    [TechStacks.others]: ["C", " C++", " Python", " PyGame", " Tensorflow", " Numpy", " docker", " Git", " SVN", " Linux", " Bash", " Vim", " UML"]
  }
  activeTech: TechStacks = TechStacks.frontEnd;

  constructor() { }

  highlight(stack: TechStacks) {
    this.activeTech = stack;
  }

  styleType(stack: TechStacks) {
    return stack !== this.activeTech ?
      {
        "color": "rgb(168, 165, 165)",
        "transition": "0.5s ease"
      }
      : {
        "color": "black",
        "transition": "0.5s ease"
      }
  }
}
