import React from 'react';
import { mount } from 'cypress-react-unit-test';
import App from '../../App';
import { createYield, idText } from 'typescript';

describe('App', () => {

    it('Visits our localhost to make sure app is running.', () => {
        cy.visit('localhost:3000')
        
    });

    it('Checks two buttons and their content are displayed and correct.', () => {
        cy.get('.button-submit').contains('Add')
        cy.get('.button-clear-completed').contains('Clear Completed')
    });

    it('Adds new todo to todo list, then deletes it.', () => {
        cy.get('.input-task').type('New todo from Cypress Testing')
        cy.get('.button-submit').click()
        cy.get('.todo-list').then(todos => {
            expect(todos[0]).to.contain.text('New todo from Cypress Testing')
        })
        cy.get('.delete-icon').eq(0).click()
    });

    it('Adds 4 todos, marks off todos 1, and 3, then deletes checked off todos.', () => {
        cy.get('.input-task').type('Todo 1')
        cy.get('.button-submit').click()
        cy.get('.input-task').type('Todo 2')
        cy.get('.button-submit').click()
        cy.get('.input-task').type('Todo 3')
        cy.get('.button-submit').click()
        cy.get('.input-task').type('Todo 4')
        cy.get('.button-submit').click()
        cy.get('.task').eq(0).click()
        cy.get('.task').eq(1).click()
        cy.get('.button-clear-completed').click()
        cy.get('.todo-list').then(todos => {
            expect(todos[0]).to.contain.text('Todo 2')
            expect(todos[0]).to.contain.text('Todo 4')
        })
    })

})