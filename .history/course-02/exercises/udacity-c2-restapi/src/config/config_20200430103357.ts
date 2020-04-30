export const config = {
  "dev": {
    "username": POSTGRESS_USERNAME,
    "password": "Upassword1",
    "database": "udagrambaerdev",
    "host": "udagrambaerdev.cnfaffdxy5o7.eu-central-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "eu-central-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-baer-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
