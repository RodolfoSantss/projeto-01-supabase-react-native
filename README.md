# Projeto para utilização de Banco de Dados com React Native
Neste mini projeto estamos utilizando o Supabase como backend de banco de dados, e iremos fazer todo o processo de login, inserção de dados, visualização, alteração e remoção.
## Como utilizar este projeto?
1. Baixe o projeto
2. Coloque em uma pasta da sua escolha
3. Abra o terminal na raiz (onde estão os arquivos `App.js` e `package.json`, e execute `npm i`
4. Crie um projeto no [Supabase](https://supabase.com/)
5. Na página inicial, copie e salve o endereço localizado abaixo do nome do projeto. Ex: <img width="1919" height="953" alt="image" src="https://github.com/user-attachments/assets/b1f10018-eeec-476d-ae91-6262f440c99c" />
Obs: a parte preta/censurada é o ID do seu projeto. Você o utilizará no passo abaixo
6. Acesse `https://supabase.com/dashboard/project/id_do_seu_projeto/settings/api-keys/legacy` e copie a chave `anon public`
7. Crie um arquivo `.env` na raiz do projeto e o popule com o endereço do seu projeto do supabase e a chave `anon public` obtidos nos passos anteriores
```env
EXPO_PUBLIC_SUPABASE_URL=https://id_do_seu_projeto.supabase.co
EXPO_PUBLIC_SUPABASE_KEY=sua_chave_anon_public_aqui
```
8. Utilize o comando SQL do arquivo [banco.sql](https://github.com/sudosamm/banquinho-3ds/blob/main/banco.sql) no SQL Editor do Supabase `https://supabase.com/dashboard/project/id_do_seu_projeto/sql` para criar a tabela utilizada no projeto
9. Execute `npm run web` para executar localmente na web
