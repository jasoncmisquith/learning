FROM node:19-alpine3.15

RUN addgroup -S nestgroup && adduser -D nestuser -h /home/nest -G nestgroup

RUN npm i -g @nestjs/cli

USER nestuser

WORKDIR /home/nest

# Initial setup command: added below only for reference
# nest new learnnest --package-manager npm --skip-git

