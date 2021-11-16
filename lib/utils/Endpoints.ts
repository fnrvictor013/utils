export default {
  PROD_URL   : 'https://api.pets',
  SANBOX_URL : 'https://sandbox-api.pets',

  PETS       :              () => `/pets`,
  SINGLE_PET : (petID: string) => `/pets/${petID}`,
}
