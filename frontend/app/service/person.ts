import Person from "../model/Person";

export const fetchAllPersons = async () => {
  const response = await fetch(process.env.BACKEND_URL! + '/person', { cache: "no-store" });
  const list: Person[] = await response.json();
  return list;
}

export const fetchById = async (id: number) => {
  const response = await fetch(process.env.BACKEND_URL! + '/person/' + id, { cache: "no-store" });
  const person: Person = await response.json();
  return person;
}

export const createPerson = async (person: Person) => {
  const response = await fetch(process.env.BACKEND_URL! + '/person', {
    cache: "no-store",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
  });
  const addedPerson: Person = await response.json();
  return addedPerson;
}

export const updatePerson = async (id: number, person: Person) => {
  const response = await fetch(process.env.BACKEND_URL! + '/person/' + id, {
    cache: "no-store",
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
  });
  const updatedPerson: Person = await response.json();
  return updatedPerson;
}

export const deletePerson = async (id: number) => {
  const response = await fetch(process.env.BACKEND_URL! + '/person/' + id, {
    cache: "no-store",
    method: 'DELETE'
  });
  const delteedPerson: Person = await response.json();
  return deletePerson;
}