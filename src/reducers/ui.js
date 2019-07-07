
/**
 * ACTIONS TYPES
 * 
 * These here are our action types defined for later use
 */

import {
  ADD_ITEM, UPDATE_FEAT, UPDATE_CHARACTER, REVERT_CHARACTER, REMOVE_ITEM, UPDATE_ITEM, ADD_SPELL,
  UPDATE_SPELL, REMOVE_SPELL, UPDATE_SPELL_SLOTS, ADD_FEAT, REMOVE_FEAT
} from './update';

// this type was ment for everything that when you click becomes editable (character stat, etc etc)
// now that I'm making item events I realize I need this and am unsure what to change it to.
export const EDIT_ITEM = 'EDIT_ITEM';
export const START_CHARACTER_CREATION = 'START_CHARACTER_CREATION';
export const CHANGE_CHARACTER_CREATION_STAGE = 'CHANGE_CHARACTER_CREATION_STAGE';

export const SHOW_ITEM_INFO = 'SHOW_ITEM_INFO';
export const SHOW_SPELL_INFO = 'SHOW_SPELL_INFO';
export const SHOW_FEAT_INFO = 'SHOW_FEAT_INFO';

export const SHOW_ADD_ITEM = 'SHOW_ADD_ITEM';
export const SHOW_ADD_SPELL = 'SHOW_ADD_SPELL';
export const SHOW_ADD_FEAT = 'SHOW_ADD_FEAT';

export const SHOW_EDIT_SPELLS_LOTS = 'SHOW_EDIT_SPELL_SLOTS';

export const HIDE_MODAL = 'HIDE_MODAL';

/**
 * ACTIONS
 * 
 * Here we define our actions
 */

export const showItemInfo = (itemID) => (dispatch) => {
  dispatch({
    type: SHOW_ITEM_INFO,
    payload: { itemID }
  })
}

export const editItem = (id) => (dispatch) => {
  dispatch({
    type: EDIT_ITEM,
    payload: { id }
  })
}

export const showSpellInfo = (spellID) => (dispatch) => {
  dispatch({
    type: SHOW_SPELL_INFO,
    payload: { spellID }
  })
}

export const showFeatInfo = (featID) => (dispatch) => {
  dispatch({
    type: SHOW_FEAT_INFO,
    payload: { featID }
  })
}

export const startCharacterCreation = () => (dispatch) => {
  dispatch({
    type: START_CHARACTER_CREATION,
    payload: {}
  })
}

export const changeCharacterCreationStage = (stage) => (dispatch) => {
  dispatch({
    type: CHANGE_CHARACTER_CREATION_STAGE,
    payload: {
      stage
    }
  })
}

export const showAddItem = () => (dispatch) => {
  dispatch({
    type: SHOW_ADD_ITEM,
    payload: {}
  })
}

export const showAddSpell = () => (dispatch) => {
  dispatch({
    type: SHOW_ADD_SPELL,
    payload: {}
  })
}

export const showAddFeat = () => (dispatch) => {
  dispatch({
    type: SHOW_ADD_FEAT,
    payload: {}
  })
}

export const showEditSpellslots = (level) => (dispatch) => {
  dispatch({
    type: SHOW_EDIT_SPELLS_LOTS,
    payload: { level }
  })
}

export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
    payload: {}
  })
}

/**
 * HANDLERS
 * 
 * Here we define handlers for our actions
 */
const actions = {}

actions[EDIT_ITEM] = (state, { payload: { id } }) =>
  Object.assign({}, state, { editing: id });

actions[START_CHARACTER_CREATION] = (state, { payload }) =>
  Object.assign({}, state, { creatingCharacter: true, creationStage: 1 })

actions[CHANGE_CHARACTER_CREATION_STAGE] = (state, { payload: { stage } }) =>
  Object.assign({}, state, { creationStage: stage })

actions[ADD_ITEM] = (state) =>
  Object.assign({}, state, { overlay: '' })

actions[UPDATE_ITEM] = (state) =>
  Object.assign({}, state, { overlay: '' })

actions[REMOVE_ITEM] = (state) =>
  Object.assign({}, state, { overlay: '' })

actions[SHOW_ITEM_INFO] = (state, { payload: { itemID } }) =>
  Object.assign({}, state, { overlay: 'ItemInfo', itemID })

actions[ADD_FEAT] = (state) =>
  Object.assign({}, state, { overlay: '' })

actions[UPDATE_FEAT] = (state) =>
  Object.assign({}, state, { overlay: '' });

actions[REMOVE_FEAT] = (state) =>
  Object.assign({}, state, { overlay: '' })

actions[SHOW_FEAT_INFO] = (state, { payload: { featID } }) =>
  Object.assign({}, state, { overlay: 'FeatInfo', featID })

actions[UPDATE_CHARACTER] = (state) =>
  Object.assign({}, state, { editing: '' });

actions[REVERT_CHARACTER] = (state) =>
  Object.assign({}, state, { editing: '' });

actions[SHOW_ADD_ITEM] = (state) =>
  Object.assign({}, state, { overlay: 'AddItem' })

actions[SHOW_ADD_FEAT] = (state) =>
  Object.assign({}, state, { overlay: 'AddFeat' })

actions[SHOW_ADD_SPELL] = (state) =>
  Object.assign({}, state, { overlay: 'AddSpell' })

actions[ADD_SPELL] = (state) =>
  Object.assign({}, state, { overlay: '' })

actions[UPDATE_SPELL] = (state) =>
  Object.assign({}, state, { overlay: '' })

actions[REMOVE_SPELL] = (state) =>
  Object.assign({}, state, { overlay: '' })

actions[UPDATE_SPELL_SLOTS] = (state) =>
  Object.assign({}, state, { overlay: '' })

actions[SHOW_SPELL_INFO] = (state, { payload: { spellID } }) =>
  Object.assign({}, state, { overlay: 'SpellInfo', spellID })

actions[SHOW_EDIT_SPELLS_LOTS] = (state, { payload: { level } }) =>
  Object.assign({}, state, { overlay: 'EditSpellSlots', slotsLevel: level })

actions[HIDE_MODAL] = (state) =>
  Object.assign({}, state, { overlay: '' })

/**
 * Reducer
 */

const initialState = {
  overlay: '',
  editing: '',
  itemID: '',
  spellID: '',
  featID: '',
  slotsLevel: 0,
  creatingCharacter: false,
  creationStage: 1
};

export default (state = initialState, action) => {
  const handler = actions[action.type]

  return handler ? handler(state, action) : state;
}