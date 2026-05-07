/*
  # Audit Submissions Table

  Stores lead-captured audit submissions from the Enterprise AI Readiness Diagnostic.

  1. New Table
    - `audit_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `company` (text)
      - `email` (text)
      - `level` (integer) - maturity level 1-10
      - `total_score` (integer)
      - `pillar_scores` (jsonb) - scores per pillar
      - `full_roadmap` (jsonb) - generated roadmap details
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS
    - Allow anonymous inserts (public diagnostic tool)
    - Restrict reads to authenticated users only
*/

CREATE TABLE IF NOT EXISTS audit_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  level integer NOT NULL DEFAULT 1,
  total_score integer NOT NULL DEFAULT 0,
  pillar_scores jsonb NOT NULL DEFAULT '{}'::jsonb,
  full_roadmap jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE audit_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an audit"
  ON audit_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON audit_submissions FOR SELECT
  TO authenticated
  USING (true);
