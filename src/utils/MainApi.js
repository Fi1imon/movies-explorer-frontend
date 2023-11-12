class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _isOK(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`)
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}/${url}`, options).then(this._isOK);
  }

  register({ name, email, password }) {
    return this._request('signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
  }

  login({ email, password }) {
    return this._request('signin', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
  }

  logout() {
    return this._request('signout', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers
    })
  }

  getUserInfo() {
    return this._request('users/me', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
  }

  patchUserInfo({ name, email }) {
    return this._request('users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email })
    })
  }

  saveFilm(film) {
    return this._request('movies', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(film)
    })
  }

  getSavedFilms() {
    return this._request('movies', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
  }

  deleteFilm({ id }) {
    return this._request(`movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
  }



}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies.fi1imon.nomoredomainsrocks.ru',
  headers: {
    'Content-Type': 'application/json',
  }
})

export default mainApi;
