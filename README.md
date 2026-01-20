# Primeiro Nest

Projeto de exemplo utilizando NestJS, com validação de dados e documentação Swagger.

## Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [class-validator](https://github.com/typestack/class-validator)
- [Swagger](https://swagger.io/)

## Instalação

```bash
npm install
```

## Rodando o projeto

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura de Pastas

- `src/`
  - `app.controller.ts` / `app.service.ts` / `app.module.ts` — Arquivos principais da aplicação
  - `main.ts` — Ponto de entrada
  - `users/` — Módulo de usuários
    - `dto/` — Data Transfer Objects (validação de dados)
      - `create-user.dto.ts` — DTO para criação de usuário
      - `update-user.dto.ts` — DTO para atualização de usuário
    - `entities/` — Entidades
      - `user.entity.ts` — Entidade de usuário
    - `users.controller.ts` — Controller de usuários
    - `users.service.ts` — Service de usuários

## Validação e Documentação

Os DTOs utilizam decorators do `class-validator` para garantir a integridade dos dados recebidos. A documentação da API é gerada automaticamente com Swagger, usando os decorators do `@nestjs/swagger`.

Exemplo de DTO:
```typescript
export class CreateUserDto {
  @ApiProperty({ example: 'Pedro Silva', description: 'O nome completo do usuário' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'FullStack Developer', description: 'Cargo ou função' })
  @IsString()
  @IsNotEmpty()
  role: string;
}
```

## Testes

Para rodar os testes:
```bash
npm run test
```
Testes end-to-end estão em `test/app.e2e-spec.ts`.

## Licença

MIT