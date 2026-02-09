create table if not exists public.proof_course_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  completed jsonb not null default '{}'::jsonb,
  responses jsonb not null default '{}'::jsonb,
  learner_name text,
  certificate_issued_at timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.proof_course_progress enable row level security;

create policy "Users can read their course progress"
  on public.proof_course_progress
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their course progress"
  on public.proof_course_progress
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their course progress"
  on public.proof_course_progress
  for update
  using (auth.uid() = user_id);
