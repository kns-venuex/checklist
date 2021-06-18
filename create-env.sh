#!/bin/bash

env_vars=""
for var in "${!GATSBY_@}"; do
    env_vars+="$var=${!var}\n"
done
for var in "${!ALGOLIA_@}"; do
    env_vars+="$var=${!var}\n"
done
env_vars=${env_vars%??}
printf -v env_vars "$env_vars"
echo "$env_vars" > .env
