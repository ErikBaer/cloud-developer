export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": "Udapassword1",
    "database": process.env.POSTGRESS_DATABASE,
    "host": "udagrambaerdev.c9oa6fu4pzs4.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
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
