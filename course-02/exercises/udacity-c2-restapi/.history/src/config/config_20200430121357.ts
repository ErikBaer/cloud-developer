export const config = {
  "dev": {
    "username": "udagrambaerdev",
    "password": "Udapassword1",
    "database": "udagrambaerdev",
    "host": "udagrambaerdev.c9oa6fu4pzs4.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": "default",
    "aws_media_bucket": "baer-udagram-dev",
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
