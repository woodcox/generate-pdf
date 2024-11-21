import { createSignal } from 'solid-js';
import { CEREMONY_PDF } from './basePdf.js';

const schema = {
  basePdf: CEREMONY_PDF,
  schemas: [
    {
      YourFullName: {
        pageUrl: '/your-details',
        label: 'Your fullname',
        type: 'text',
        position: { x: 68.28, y: 60.66 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter your fullname',
        required: true,
        component: 'AppendFields',
        componentProps: {
          componentId: 'YourFullName', // this must be unique if you don't want multiple AppendFields components sharing the same state
          fields: [
            { name: 'yourFirstname', label: 'Your first name' },
            { name: 'yourMiddlename', label: 'Your middle names' },
            { name: 'yourLastname', label: 'Your surname' }
          ]
        }
      },
      PartnerFullName: {
        pageUrl: '/partner',
        label: 'Your partners fullname',
        type: 'text',
        position: { x: 68.28, y: 60.66 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter your partners fullname',
        required: true,
        component: 'AppendFields',
        componentProps: {
          componentId: 'PartnerFullName',
          fields: [
            { name: 'partnerFirstname', label: 'Their first name' },
            { name: 'partnerMiddlename', label: 'Their middle names' },
            { name: 'partnerLastname', label: 'Their surname' }
          ]
        }
      },
      Email: {
        pageUrl: '/your-details',
        label: 'Your email',
        type: 'text',
        position: { x: 52.4, y: 69.55 },
        width: 140,
        height: 10,
        fieldType: 'email',
        errormessage: 'Enter your email address',
        autocomplete: 'email',
        required: true,
      },
      Phone: {
        pageUrl: '/your-details',
        label: 'Your telephone number',
        type: 'text',
        position: { x: 53.76, y: 80.54 },
        width: 100,
        height: 10,
        fieldType: 'tel',
        errormessage: 'Enter a UK phone number',
        autocomplete: 'tel',
        required: true,
      },
      CeremonyType: {
        pageUrl: '/booking',  
        label: 'Ceremony type',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: '',
        required: true,
        component: 'Radio',
        componentProps: {
          componentId: 'ceremonyType',
          name: 'ceremonyType',
          label: 'What type of ceremony have you booked?',
          value: '',
          initialOption: 'Select the ceremony type',
          options: [
            { name: 'ceremonyType', value: 'Marriage', id: 'Marriage' },
            { name: 'ceremonyType', value: 'Civil Partnership', id: 'CivilPartnership' }
          ]
        }
      },
      BookingRef: {
        pageUrl: '/booking',
        label: 'Ceremony booking reference',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      CeremonyVenue: {
        pageUrl: '/booking',
        label: 'Venue',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
        component: 'Dropdown',
        componentProps: {
          name: 'venue',
          label: 'Where is your ceremony taking place?',
          value: '',
          options: [
            { label: 'Select your venue', value: '' , placeholder: true },
            { label: 'Civic Hall', value: 'Civic Hall' },
            { label: 'Leeds Town Hall', value: 'Leeds Town Hall' }
          ]
        }
      },
      CeremonyDate: {
        pageUrl: '/booking',
        label: 'Ceremony date',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
        component: 'DateInput',
        componentProps: {
          name: 'date-input',
          heading: 'What date is the wedding?',
          helpText: 'For example, 27 3 2024',
        }
      },
      WordingOption: {
        pageUrl: '/ceremony',
        label: 'Wording option',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
        component: 'Radio',
        componentProps: {
          componentId: 'WordingOption',
          name: 'WordingOption',
          label: 'Which ceremony wording?',
          value: '',
          initialOption: 'Choose your ceremony wording',
          options: [
            { name: 'wordingOption', value: 'Option 1', id: 'Option1' },
            { name: 'wordingOption', value: 'Option 2', id: 'Option2' },
            { name: 'wordingOption', value: 'Option 3', id: 'Option3' }
          ]
        }
      },
      Rings: {
        pageUrl: '/ceremony',
        label: 'Exchange rings',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      RoomEntrance: {
        pageUrl: '/ceremony',
        label: 'Entrance to room',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      Photographer: {
        pageUrl: '/ceremony',
        label: 'Photographer',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      Videographer: {
        pageUrl: '/ceremony',
        label: 'Videographer',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      GuestNumber: {
        pageUrl: '/ceremony',
        label: 'Number of guests',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      Witness1: {
        pageUrl: '/witness',
        label: 'Witness 1 fullname',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
        component: 'AppendFields',
        componentProps: {
          componentId: 'Witness1',
          fields: [
            { name: 'witnessFirstname', label: 'Witness 1 first name' },
            { name: 'witnessMiddlename', label: 'Witness 1 middle names' },
            { name: 'witnessLastname', label: 'Witness 1 surname' }
          ]
        }
      },
      Witness2: {
        pageUrl: '/witness',
        label: 'Witness 2 fullname',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
        component: 'AppendFields',
        componentProps: {
          componentId: 'Witness2',
          fields: [
            { name: 'witness2Firstname', label: 'Witness 2 first name' },
            { name: 'witness2Middlename', label: 'Witness 2 middle names' },
            { name: 'witness2Lastname', label: 'Witness 2 surname' }
          ]
        }
      },
      YourMum: {
        pageUrl: '/your-details',
        label: 'Parent 1 full name',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
        component: 'AddAnotherParent',
        componentProps: {
          componentId: 'Parents',
          title: 'Parent',
          grammar: 'Your',
          visible: true,
          hintText: "For example, your mother, father or parent"
        }
      },
      YourMumDead: {
        pageUrl: '/your-parents',
        label: 'Is parent 1 alive?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: '',
        required: true,
        component: 'Radio',
        componentProps: {
          componentId: 'mumIsALive',
          name: 'mumIsAlive',
          label: 'Is parent 1 alive?',
          value: '',
          initialOption: 'Select...',
          options: [
            { name: 'mumIsAlive', value: 'Yes, they are alive', id: 'mumAlive' },
            { name: 'mumIsAlive', value: 'No, they have died', id: 'mumDead' }
          ]
        }
      },
      YourMumJob: {
        pageUrl: '/your-parents',
        label: "Parent 1's current or last job",
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      YourMumRetired: {
        pageUrl: '/your-parents',
        label: 'Is parent 1 alive?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
        component: 'Radio',
        componentProps: {
          componentId: 'MumRetired',
          name: 'MumRetired',
          label: 'Is parent 1 retired?',
          value: '',
          initialOption: 'Select...',
          options: [
            { name: 'mumRetired', value: 'No', id: 'mumWorking' },
            { name: 'mumRetired', value: 'Yes, retired', id: 'mumRetired' }
          ]
        }
      },
      YourDad: {
        pageUrl: '/your-parents',
        label: 'Parent 2 fullname?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      YourDadDead: {
        pageUrl: '/your-parents',
        label: 'Is parent 2 alive?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: '',
        required: true,
        component: 'Radio',
        componentProps: {
          componentId: 'DadIsALive',
          name: 'DadIsAlive',
          label: 'Is parent 2 alive?',
          value: '',
          initialOption: 'Select...',
          options: [
            { name: 'dadIsAlive', value: 'Yes, they are alive', id: 'dadAlive' },
            { name: 'dadIsAlive', value: 'No, they have died', id: 'dadDead' }
          ]
        }
      },
      YourDadJob: {
        pageUrl: '/your-parents',
        label: "Parent 2's current or last job",
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      YourDadRetired: {
        pageUrl: '/your-parents',
        label: 'Is parent 2 retired?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
        component: 'Radio',
        componentProps: {
          componentId: 'DadIsRetired',
          name: 'dadIsRetired',
          label: 'Is parent 2 retired?',
          value: '',
          initialOption: 'Select...',
          options: [
            { name: 'dadIsRetired', value: 'No', id: 'dadWorking' },
            { name: 'dadIsRetired', value: 'Yes, retired', id: 'dadRetired' }
          ]
        }
      },
      YourStepParent1: {
        pageUrl: '/your-parents',
        label: 'Your parents fullname',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      YourStepParent1Dead: {
        pageUrl: '/your-parents',
        label: 'Is your parent alive?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: '',
        required: true,
      },
      YourStepParent1Job: {
        pageUrl: '/your-parents',
        label: 'Your parents current or last job',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      YourStepParent1Retired: {
        pageUrl: '/your-parents',
        label: 'Are they retired?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
        component: 'Radio',
        componentProps: {
          componentId: 'Parent2Retired',
          name: 'Parent2Retired',
          label: 'Are they retired?',
          value: '',
          initialOption: '',
          options: [
            { name: 'parent2Retired', value: 'No', id: 'parent2Working' },
            { name: 'parent2Retired', value: 'Yes, retired', id: 'parent2Retired' }
          ]
        }
      },
      PartnerMum: {
        pageUrl: '/partner-parents',
        label: 'Your partners parent fullname',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      PartnerMumDead: {
        pageUrl: '/partner-parents',
        label: 'Is your parent alive?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: '',
        required: true,
      },
      PartnerMumJob: {
        pageUrl: '/partner-parents',
        label: 'Your partners parents current or last job',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      PartnerMumRetired: {
        pageUrl: '/partner-parents',
        label: 'Are they retired?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      PartnerDad: {
        pageUrl: '/partner-parents',
        label: 'Your partners parent fullname',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      PartnerDadDead: {
        pageUrl: '/partner-parents',
        label: 'Is your partners parent alive?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: '',
        required: true,
      },
      PartnerDadJob: {
        pageUrl: '/partner-parents',
        label: 'Your partners parents current or last job',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
      PartnerDadRetired: {
        pageUrl: '/partner-parents',
        label: 'Are they retired?',
        type: 'text',
        position: { x: 33.65, y: 104.63 },
        width: 100,
        height: 10,
        fieldType: 'text',
        errormessage: 'Please enter the day',
        required: true,
      },
    },
  ],
};

export const [template, setTemplate] = createSignal(schema);