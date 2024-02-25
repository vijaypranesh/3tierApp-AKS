FROM ubuntu

MAINTAINER Vijayendra

RUN apt-get update
RUN apt-get install -y curl
RUN apt install -y git
RUN apt install -y nginx
# Set the working directory in the container
WORKDIR /app
RUN git clone https://github.com/vijaypranesh/notesapp.git
RUN cp -rp /app/notesapp/nginxconf/myapp.conf /etc/nginx/sites-available
RUN ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf
RUN rm -rf /etc/nginx/sites-enabled/default
RUN cp -rp /app/notesapp/nginxconf/index.html /var/www/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
