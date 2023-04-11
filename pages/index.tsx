import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import PersonCard from '@/Component/PersonCard';
import AddPersonForm from '@/Component/AddPersonForm';
import { Person } from '@/Models/Person';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [persons, setPersons] = useState<Person[]>([])
  useEffect(() => {
    getAllPersons()
      .then(response => setPersons(response.data))
  }, [])

  function getAllPersons() {
    return fetch('https://localhost:7123/api/Person', { method: "GET", mode: "cors" })
      .then(response => response.json())
  }


  return (
    <div>

      {persons?.map((person, key) => <PersonCard key={person.personId} person={person} />)}

      <a href='AddPerson'>Add</a>

    </div>
  )
}
