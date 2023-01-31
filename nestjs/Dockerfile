FROM node:19-alpine3.15

RUN addgroup -S nestgroup --gid 1024 && adduser --uid 1001 -D nestuser -h /home/nest -G nestgroup

COPY --chown=nestuser:nestgroup learnnest/package.json /home/nest/learnnest/

USER nestuser

WORKDIR /home/nest/learnnest
RUN yarn

COPY --chown=nestuser:nestgroup learnnest /home/nest/learnnest

RUN ls /home/nest/learnnest
# Initial setup command: added below only for reference
# nest new learnnest --package-manager npm --skip-git

