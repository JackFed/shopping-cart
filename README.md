# Shopping Cart App

## Goals
This app will display external api (Spotify) shopping items through my own frontend. 
It will be built using React and an external api. Trying to use README first design to
keep track of everything needed.

# Design
## Use Spotify API
Use the Spoify API to query for top 50 most listened to albums.
Add an arbitrary price tag based on # of tracks and general album costs (~20-40 dollars).
Display information for each track(track length, track name), number of tracks, artist, album name, 
features, record label, and album cover image.

## Components
* Homepage
    - Search bar
    - Display (Describe products/company)
* Shop page
    - Items
    - Next page bar    
* Cart
    - Selected Items
    - Price
    - Checkout button
* Items
    - Can have variant that is selected items
    - Quantity
    - Cost
    - Picture of item
    - Add to cart button
        * Be able to change quantity
* Navigation bar
    - Navigation to each page

## Core design features
### Website Pages
* Homepage
* Shop items page
* Shopping Cart
    * (Extra: Have option to check from any page with a popup)
* Navbar
* About page (extra)

### UI design
Create a basic UI layout using a wireframe tool like Figma or just paper and pencil.
Goal is to have a rough idea where elements should be for CSS. Decide if making 
a mobile version is worth it for this project.

### CSS
Decide whether to make own components or use Tailwind.
Create a plesant color scheme for the entire app.

### Hosting
Use GitHub Actions
