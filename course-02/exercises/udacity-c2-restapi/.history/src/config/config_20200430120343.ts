export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": "Udapassword1",
    "database": process.env.POSTGRESS_DATABASE,
    "host": "udagrambaerdev.c9oa6fu4pzs4.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": "default",
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}