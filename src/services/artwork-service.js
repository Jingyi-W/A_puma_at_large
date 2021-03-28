const AICA_BASE_URL = "https://api.artic.edu/api/v1/artworks"
const IIIF_IMAGE_BASE_URL = "https://www.artic.edu/iiif/2"
const IIIF_IMAGE_SUFFIX = "/full/843,/0/default.jpg"

const findArtworkById = (artworkId) => fetch(`${AICA_BASE_URL}/${artworkId}`).then(response => response.json())

const findArtworksByKeyword = (keyword) => fetch(`${AICA_BASE_URL}/search?q=${keyword}`).then(response => response.json())

const findPaginatedArtworks = (page, limit) => fetch(`${AICA_BASE_URL}?page=${page}&limit=${limit}`).then(response => response.json())

const findArtworkImageByImageId = (imageId) => fetch(`${IIIF_IMAGE_BASE_URL}/${imageId}/${IIIF_IMAGE_SUFFIX}`).then(response => response.json())

export default {
  findArtworkById, findArtworksByKeyword, findPaginatedArtworks, findArtworkImageByImageId
}