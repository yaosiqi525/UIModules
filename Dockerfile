FROM node
COPY . /data/work
WORKDIR /data/work
RUN ["chmod", "+x", "./deploy.sh"]
CMD [ "./deploy.sh" ]