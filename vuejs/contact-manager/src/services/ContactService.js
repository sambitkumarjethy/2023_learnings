import axios from "axios";
export class contactService {
  static serverURl = `http://localhost:9000`;
  static getAllCOntacts() {
    let dataURL = `${this.serverURl}/contacts`;
    return axios.get(dataURL);
  }
  static getContact(contactId) {
    let dataURL = `${this.serverURl}/contacts/${contactId}`;
    return axios.get(dataURL);
  }
  static createContact(contact) {
    let dataURL = `${this.serverURl}/contacts`;
    return axios.post(dataURL, contact);
  }
  static updateContact(contact, contactId) {
    let dataURL = `${this.serverURl}/contacts/${contactId}`;
    return axios.put(dataURL, contact);
  }
  static deleteContact(contactId) {
    let dataURL = `${this.serverURl}/contacts/${contactId}`;
    return axios.delete(dataURL);
  }
  static getAllGroups() {
    let dataURL = `${this.serverURl}/groups`;
    return dataURL;
  }
  static getGroup(contact) {
    let groupId = contact.groupId;
    let dataURL = `${this.serverURl}/groups/${groupId}`;
    return axios.get(dataURL);
  }
}
