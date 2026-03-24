create table if not exists public.catalogue_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  created_at timestamptz not null default now()
);

alter table public.catalogue_leads enable row level security;

-- Allow anyone to insert (public form)
create policy "Anyone can submit catalogue lead"
  on public.catalogue_leads for insert
  with check (true);
