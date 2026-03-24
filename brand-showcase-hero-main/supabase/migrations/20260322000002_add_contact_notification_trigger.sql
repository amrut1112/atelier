-- Create a function to call the edge function
CREATE OR REPLACE FUNCTION notify_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the edge function asynchronously
  PERFORM
    net.http_post(
      url := 'https://boniuafxbgddcedizslj.supabase.co/functions/v1/send-contact-notification',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || (SELECT value FROM vault.secrets WHERE name = 'service_role_key')
      ),
      body := jsonb_build_object('record', row_to_json(NEW)::jsonb)
    );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on contact_submissions table
CREATE TRIGGER contact_submission_notification
  AFTER INSERT ON public.contact_submissions
  FOR EACH ROW EXECUTE FUNCTION notify_contact_submission();