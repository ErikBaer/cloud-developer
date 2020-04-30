export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_USERNAME,
    "host": process.env.POSTGRESS_USERNAME,
    "dialect": process.env.POSTGRESS_USERNAME,
    "aws_region": process.env.POSTGRESS_USERNAME,
    "aws_profile": process.env.POSTGRESS_USERNAME,
    "aws_media_bucket": process.env.POSTGRESS_USERNAME
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
