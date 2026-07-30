import { auth } from "~~/lib/auth";

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({ headers: event.headers });
  // We are attaching the user object if it exists to every request
  // Useful for our database insertions
  event.context.user = session?.user;
  if (event.path.startsWith("/dashboard")) {
    if (!session) {
      await sendRedirect(event, "/", 302);
    }
  }
});
