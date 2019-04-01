# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.2.0

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 0.0.0.0

# ##################
# ### production ###
# ##################

# # base image

# # generate build
# RUN npm run build

# FROM nginx:1.13.9-alpine

# # copy artifact build from the 'build environment'
# COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# # expose port 80
# EXPOSE 80

# # run nginx
# CMD ["nginx", "-g", "daemon off;"]