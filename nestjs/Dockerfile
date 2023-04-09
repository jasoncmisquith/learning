FROM node:19-alpine3.15 as DEV



COPY learnnest/package.json /home/nest/learnnest/

WORKDIR /home/nest/learnnest
RUN yarn install

COPY learnnest /home/nest/learnnest

RUN ls /home/nest/learnnest

RUN yarn prisma generate

# FROM DEV

# RUN addgroup -S nestgroup --gid 1024 && adduser --uid 1001 -D nestuser -h /home/nest -G nestgroup



# Initial setup command: added below only for reference
# nest new learnnest --package-manager npm --skip-git

