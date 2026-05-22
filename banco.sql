create extension if not exists "pgcrypto";

create table mangas (
  id uuid primary key default gen_random_uuid(),

  titulo text not null,
  genero text,
  nota numeric,
  volumes integer,
  imagem text,
  status text,

  publico boolean default false,

  user_id uuid references auth.users(id),

  created_at timestamp default now()
);

alter table mangas enable row level security;

create policy "Usuarios podem ver mangas publicos ou proprios"
on mangas
for select
using (
  publico = true
  or auth.uid() = user_id
);

create policy "Usuarios podem inserir seus mangas"
on mangas
for insert
with check (
  auth.uid() = user_id
);

create policy "Usuarios podem editar seus mangas"
on mangas
for update
using (
  auth.uid() = user_id
);

create policy "Usuarios podem deletar seus mangas"
on mangas
for delete
using (
  auth.uid() = user_id
);