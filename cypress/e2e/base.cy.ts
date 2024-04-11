describe('checa elementos básicos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/src');
  });

  it('titulo do trabalho existe', () => {
    cy.get('.titulo-do-trabalho').contains('Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP');
    cy.compareSnapshot('Trabalho - Base');
  });

  it('botão de expandir resumo existe', () => {
    cy.get('.btn-ver-mais').contains('ver mais');
    cy.compareSnapshot('Trabalho - Resumo expandido');
  });

  it('botão de criar tópico existe', () => {
    cy.get('#criarTopico').contains('criar tópico');
  });

  it('expandir tópico funciona', () => {
    cy.get('#expandTopic').click();
    cy.get('.expand-topic1 .expand-topic2 .expand-topic3. expand-topic4').should('exist');
    cy.compareSnapshot('Trabalho - Card de topico expandido');
  });

  it('clicar em `criar tópico` exibe o formulário', () => {
    cy.get('#criarTopico').click();
    cy.get('#btnEnviar').contains('Enviar');
    cy.get('#form').contains('Assunto');
    cy.get('input').contains('Conteúdo');
    cy.get('.input').invoke('attr', 'placeholder').should('contain', 'Defina um tópico sucinto para notificar os autores...');
    cy.compareSnapshot('Trabalho - Criando novo topico');
  });

  it('enviar o formulário exibe mensagem de sucesso', () => {
    cy.get('#btnEnviar').click();
    cy.get('#btnEnviar').click();
    cy.get('#feedback').contains('Aguardando feedback dos autores');
    cy.compareSnapshot('Trabalho - Topico enviado');
  });

})