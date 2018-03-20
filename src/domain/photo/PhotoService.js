export default class PhotoService {

  constructor(resource) {
    this._resource = resource('v1/fotos{/id}');
  }

  list() {
    return this._resource
      .query()
      .then(res => res.json(), err => {
        console.log(err);
        throw new Error('It was not possible to retrieve the photos');
      });
  }

  save(photo) {
    if (photo._id) {
      return this._resource
        .update({ id: photo._id}, photo);
    } else {
      return this._resource
        .save(photo);
    }
  }

  delete(id) {
    return this._resource
      .delete({ id })
      .then(null, err => {
        console.log(err);
        throw new Error('It was not possible to remove the photo');
      });
  }

  find(id) {
    return this._resource
      .get({ id })
      .then(res => res.json());
  }
}