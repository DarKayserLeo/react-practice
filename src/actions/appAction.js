const _setWorkshopType = (payload) => ({
  type: 'WORKSHOP_TYPE',
  payload,
});

const _removeWorkshopType = (payload) => ({
  type: 'REMOVE_WORKSHOP_TYPE',
  payload,
});

export function setWorkshopType(payload) {
  return (dispatch) => {
    dispatch(_setWorkshopType(payload));
  };
}

export function removeWorkshopType(payload, index) {
  return (dispatch) => {
    const newPayload = [...payload];
    newPayload.splice(index, 1);
    dispatch(_removeWorkshopType(newPayload));
  };
}
