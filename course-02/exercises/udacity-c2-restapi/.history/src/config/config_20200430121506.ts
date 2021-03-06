export const config = {
  "dev": {
    "username": process.env.,
    "password": process.env.,
    "database": process.env.,
    "host": process.env.,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.,
    "aws_media_bucket": process.env.,
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
