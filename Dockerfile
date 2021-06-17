FROM node:12-buster as build
MAINTAINER José Moreira <josemoreiravarzim@gmail.com>
RUN yarn global add gatsby-cli
WORKDIR /app
ADD . ./
RUN yarn
RUN gatsby build

FROM gatsbyjs/gatsby
COPY --from=build /app/public /pub
