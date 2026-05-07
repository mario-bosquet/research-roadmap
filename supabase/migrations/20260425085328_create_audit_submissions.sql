/*
  # Create audit_submissions table

  Captures lead and audit results from the Enterprise AI Readiness Diagnostic.

  1. New Tables
    - `audit_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `company` (text)
      - `email` (text)
      - `total_score` (int)
      - `level` (int)
      - `pillar_scores` (jsonb) — per-pillar score map
      - `answers` (jsonb) — full Q->option map
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS
    - Allow anonymous INSERT (public diagnostic)
    - No SELECT policy: data is write-only from the public client
*/

CREATE TABLE IF NOT EXISTS audit_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  total_score int NOT NULL DEFAULT 0,
  level int NOT NULL DEFAULT 1,
  pillar_scores jsonb NOT NULL DEFAULT '{}'::jsonb,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE audit_submissions ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'audit_submissions' AND policyname = 'Anonymous can submit audit'
  ) THEN
    CREATE POLICY "Anonymous can submit audit"
      ON audit_submissions FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'audit_submissions' AND policyname = 'Authenticated can submit audit'
  ) THEN
    CREATE POLICY "Authenticated can submit audit"
      ON audit_submissions FOR INSERT
      TO authenticated
      WITH CHECK (true);
  END IF;
END $$;