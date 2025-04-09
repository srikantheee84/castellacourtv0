#!/bin/bash

# Create the images directory if it doesn't exist
mkdir -p public/images

# Download Savannah's image
curl "https://static.wixstatic.com/media/33df5c_ccdb9983f3a34e649ceeb6d8f63b9c26~mv2.png/v1/crop/x_4,y_568,w_638,h_538/fill/w_278,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-03-30%20at%209_05_48%E2%80%AFPM.png" -o public/images/savannah-astani.png

# Download Alexander's image
curl "https://static.wixstatic.com/media/33df5c_ccdb9983f3a34e649ceeb6d8f63b9c26~mv2.png/v1/crop/x_4,y_0,w_638,h_561/fill/w_252,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-03-30%20at%209_05_48%E2%80%AFPM.png" -o public/images/alexander-korn.png

# Download team logo
curl "https://static.wixstatic.com/media/33df5c_2cffae1445f6491b85337d6342b5f897~mv2.png/v1/fill/w_823,h_202,al_c,lg_1,q_85,enc_avif,quality_auto/image.png" -o public/images/eklund-gomes-team.png 