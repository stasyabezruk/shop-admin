const API = 'https://api.jumpseller.com/v1/'
const AUTH = '?login=b5fa1addcdd9be3925431ea971ddaea5&authtoken=423adb27d825387f5e48effd5970090a'

export default {
  PRODUCTS: API + 'products.json' + AUTH,
  CATEGORIES: API + 'categories.json' + AUTH
}
