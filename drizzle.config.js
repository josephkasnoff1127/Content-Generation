/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://genuidb_owner:IHwLy1c4MEvQ@ep-dawn-math-a5nvj9hu.us-east-2.aws.neon.tech/genuidb?sslmode=require',
  }
};