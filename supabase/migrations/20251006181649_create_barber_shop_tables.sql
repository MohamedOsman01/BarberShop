/*
  # Barber Shop Database Schema

  Creates tables for managing bookings and testimonials for the barber shop website.

  ## New Tables
  
  ### `bookings`
  - `id` (uuid, primary key) - Unique identifier for each booking
  - `customer_name` (text) - Name of the customer
  - `customer_email` (text) - Email address for confirmation
  - `customer_phone` (text) - Contact phone number
  - `service` (text) - Type of service requested
  - `booking_date` (date) - Date of the appointment
  - `booking_time` (text) - Time slot for the appointment
  - `status` (text) - Booking status (pending, confirmed, completed, cancelled)
  - `notes` (text, optional) - Additional customer notes
  - `created_at` (timestamptz) - Timestamp of booking creation

  ### `testimonials`
  - `id` (uuid, primary key) - Unique identifier for each testimonial
  - `customer_name` (text) - Name of the customer
  - `rating` (integer) - Rating from 1-5 stars
  - `review_text` (text) - Customer review content
  - `service` (text, optional) - Service they received
  - `is_approved` (boolean) - Whether testimonial is approved for display
  - `created_at` (timestamptz) - Timestamp of review submission

  ## Security
  - Enable RLS on both tables
  - Public can insert bookings and testimonials
  - Public can read approved testimonials only
  - Only authenticated users can view all bookings and manage testimonials
*/

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  service text NOT NULL,
  booking_date date NOT NULL,
  booking_time text NOT NULL,
  status text DEFAULT 'pending' NOT NULL,
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  service text DEFAULT '',
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Bookings policies
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

-- Testimonials policies
CREATE POLICY "Anyone can submit testimonials"
  ON testimonials FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (is_approved = true);

CREATE POLICY "Authenticated users can view all testimonials"
  ON testimonials FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved);
CREATE INDEX IF NOT EXISTS idx_testimonials_rating ON testimonials(rating);