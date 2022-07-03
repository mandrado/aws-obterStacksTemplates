# Obter (baixar) todos os modelos do listStacks
Este código permite baixar todos os modelos que estão rodando em seu CloudFormation

## O comando 'cloudformation get-template'

Caso deseje abaixar um ou dois modelos, useo o comando abaixo, ele retorna o corpo do modelo para uma pilha especificada. Você pode obter o modelo para pilhas em execução ou excluídas.

`aws cloudformation get-template --stack-name {stack_name} --query "TemplateBody" --output text`


## lista de comandos

`npm init -y`

`npm install aws-sdk`

`npm install uuid`

`aws configure`

## extensões VS Code

`EditorConfig for VS Code (publisher:"EditorConfig")`

```
# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Dependências

* "aws-sdk": "^2.1167.0",
* "uuid": "^8.3.2"

## retrições do proxy:

Em settings (ctrl+,) acrescente a linha:

```
    "http.proxyAuthorization": null,
```

Rode o comando:

`npm config set strict-ssl false`


