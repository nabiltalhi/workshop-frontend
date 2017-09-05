import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Flight} from './flight';

@Injectable()
export class FlightsService {

  static getFlights(): Observable<Flight[]> {
    const flights: Flight[] = [
      {
        'id': 122536359803065660,
        'flightName': 'KL2666',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 2666,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '00:05:00',
        'serviceType': 'J',
        'mainFlight': 'HV5466',
        'codeshares': {
          'codeshares': [
            'KL2666'
          ]
        },
        'estimatedLandingTime': '2017-08-29T23:58:22.000+02:00',
        'actualLandingTime': '2017-08-29T23:58:00.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR'
          ]
        },
        'route': {
          'destinations': [
            'VRN'
          ]
        },
        'terminal': 1,
        'gate': 'D84',
        'baggageClaim': {
          'belts': [
            '2'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T00:31:25.000+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73W',
          'iatasub': '73W'
        },
        'aircraftRegistration': 'PHXRD',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803063070,
        'flightName': 'KL2583',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 2583,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '00:10:00',
        'serviceType': 'J',
        'mainFlight': 'HV5666',
        'codeshares': {
          'codeshares': [
            'KL2583'
          ]
        },
        'estimatedLandingTime': '2017-08-30T00:04:07.000+02:00',
        'actualLandingTime': '2017-08-30T00:04:00.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR'
          ]
        },
        'route': {
          'destinations': [
            'LPA'
          ]
        },
        'terminal': 1,
        'gate': 'C11',
        'baggageClaim': {
          'belts': [
            '6'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T00:41:51.000+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHSB',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803065420,
        'flightName': 'KL2632',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 2632,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '00:15:00',
        'serviceType': 'J',
        'mainFlight': 'HV5314',
        'codeshares': {
          'codeshares': [
            'KL2632'
          ]
        },
        'estimatedLandingTime': '2017-08-30T00:10:00.000+02:00',
        'actualLandingTime': '2017-08-30T00:12:00.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR'
          ]
        },
        'route': {
          'destinations': [
            'LCA'
          ]
        },
        'terminal': 1,
        'gate': 'D03',
        'baggageClaim': {
          'belts': [
            '4'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T00:49:03.000+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHSG',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803062990,
        'flightName': 'KL2574',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 2574,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '00:25:00',
        'serviceType': 'J',
        'mainFlight': 'HV5764',
        'codeshares': {
          'codeshares': [
            'KL2574'
          ]
        },
        'estimatedLandingTime': '2017-08-29T23:55:03.000+02:00',
        'actualLandingTime': '2017-08-29T23:55:00.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR',
            'EXP'
          ]
        },
        'route': {
          'destinations': [
            'GRO'
          ]
        },
        'terminal': 1,
        'gate': 'D86',
        'baggageClaim': {
          'belts': [
            '4'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T00:28:55.000+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHXE',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803063070,
        'flightName': 'KL2588',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 2588,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '00:30:00',
        'serviceType': 'J',
        'mainFlight': 'HV6004',
        'codeshares': {
          'codeshares': [
            'KL2588'
          ]
        },
        'estimatedLandingTime': '2017-08-30T00:27:02.000+02:00',
        'actualLandingTime': '2017-08-30T00:25:00.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR'
          ]
        },
        'route': {
          'destinations': [
            'OPO'
          ]
        },
        'terminal': 1,
        'gate': 'D85',
        'baggageClaim': {
          'belts': [
            '6'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T01:19:10.000+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHZV',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803065580,
        'flightName': 'KL2652',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 2652,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '00:40:00',
        'serviceType': 'J',
        'mainFlight': 'HV6118',
        'codeshares': {
          'codeshares': [
            'KL2652'
          ]
        },
        'estimatedLandingTime': '2017-08-30T00:39:21.000+02:00',
        'actualLandingTime': '2017-08-30T00:55:00.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR'
          ]
        },
        'route': {
          'destinations': [
            'AGP'
          ]
        },
        'terminal': 1,
        'gate': 'C09',
        'baggageClaim': {
          'belts': [
            '6'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T01:35:07.000+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHSA',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803065730,
        'flightName': 'KL2674',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 2674,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '00:55:00',
        'serviceType': 'J',
        'mainFlight': 'HV5630',
        'codeshares': {
          'codeshares': [
            'KL2674'
          ]
        },
        'estimatedLandingTime': '2017-08-30T00:33:48.000+02:00',
        'actualLandingTime': '2017-08-30T00:33:00.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR',
            'EXP'
          ]
        },
        'route': {
          'destinations': [
            'PMI'
          ]
        },
        'terminal': 1,
        'gate': 'D68',
        'baggageClaim': {
          'belts': [
            '2'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T01:11:34.121+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHSC',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803065810,
        'flightName': 'KL2684',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 2684,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '01:15:00',
        'serviceType': 'J',
        'mainFlight': 'HV5672',
        'codeshares': {
          'codeshares': [
            'KL2684'
          ]
        },
        'estimatedLandingTime': '2017-08-30T00:59:00.000+02:00',
        'actualLandingTime': '2017-08-30T00:55:00.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR',
            'EXP'
          ]
        },
        'route': {
          'destinations': [
            'IBZ'
          ]
        },
        'terminal': 1,
        'gate': 'D79',
        'baggageClaim': {
          'belts': [
            '2'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T01:24:29.000+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHSI',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803065500,
        'flightName': 'KL2642',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 2642,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '01:30:00',
        'serviceType': 'J',
        'mainFlight': 'HV6146',
        'codeshares': {
          'codeshares': [
            'KL2642'
          ]
        },
        'estimatedLandingTime': '2017-08-30T01:28:40.000+02:00',
        'actualLandingTime': '2017-08-30T01:28:40.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR'
          ]
        },
        'route': {
          'destinations': [
            'ALC'
          ]
        },
        'terminal': 1,
        'gate': 'C14',
        'baggageClaim': {
          'belts': [
            '2'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T02:01:24.000+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHSW',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803152830,
        'flightName': 'KL3106',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'D',
        'flightNumber': 3106,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '02:10:00',
        'serviceType': 'J',
        'mainFlight': 'PC1258',
        'codeshares': {
          'codeshares': [
            'KL3106'
          ]
        },
        'estimatedLandingTime': null,
        'actualLandingTime': null,
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': '2017-08-30T02:39:30.000+02:00',
        'publicFlightState': {
          'flightStates': [
            'DEP'
          ]
        },
        'route': {
          'destinations': [
            'SAW'
          ]
        },
        'terminal': 3,
        'gate': 'G02',
        'baggageClaim': null,
        'expectedTimeOnBelt': null,
        'checkinAllocations': {
          'checkinAllocations': [
            {
              'startTime': '2017-08-29T23:10:00.000+02:00',
              'endTime': '2017-08-30T01:10:00.000+02:00',
              'rows': {
                'rows': [
                  {
                    'position': '27',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': '',
                            'description': ''
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': '',
                            'description': ''
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': '',
                            'description': ''
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': '',
                            'description': ''
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          'remarks': null
        },
        'transferPositions': {
          'transferPositions': [
            9
          ]
        },
        'aircraftType': {
          'iatamain': '320',
          'iatasub': '320'
        },
        'aircraftRegistration': 'TCNBF',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359802868740,
        'flightName': 'KL0894',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 894,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '04:30:00',
        'serviceType': 'J',
        'mainFlight': 'KL0894',
        'codeshares': {
          'codeshares': [
            'CZ0779',
            'MU8271'
          ]
        },
        'estimatedLandingTime': '2017-08-30T04:42:27.000+02:00',
        'actualLandingTime': '2017-08-30T04:42:27.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR',
            'EXP'
          ]
        },
        'route': {
          'destinations': [
            'PVG'
          ]
        },
        'terminal': 3,
        'gate': 'E17',
        'baggageClaim': {
          'belts': [
            '17A'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T05:48:00.101+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '787',
          'iatasub': '789'
        },
        'aircraftRegistration': 'PHBHL',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359802868450,
        'flightName': 'KL0856',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 856,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '04:50:00',
        'serviceType': 'J',
        'mainFlight': 'KL0856',
        'codeshares': {
          'codeshares': [
            'AF8421'
          ]
        },
        'estimatedLandingTime': '2017-08-30T04:36:00.000+02:00',
        'actualLandingTime': '2017-08-30T04:36:00.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR',
            'EXP'
          ]
        },
        'route': {
          'destinations': [
            'ICN'
          ]
        },
        'terminal': 3,
        'gate': 'F08',
        'baggageClaim': {
          'belts': [
            '16A'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T05:32:07.505+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '74E',
          'iatasub': '74E'
        },
        'aircraftRegistration': 'PHBFC',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803065660,
        'flightName': 'KL2667',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'D',
        'flightNumber': 2667,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '05:00:00',
        'serviceType': 'J',
        'mainFlight': 'HV5355',
        'codeshares': {
          'codeshares': [
            'KL2667'
          ]
        },
        'estimatedLandingTime': null,
        'actualLandingTime': null,
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': '2017-08-30T05:05:44.000+02:00',
        'publicFlightState': {
          'flightStates': [
            'DEP'
          ]
        },
        'route': {
          'destinations': [
            'FAO'
          ]
        },
        'terminal': 1,
        'gate': 'C14',
        'baggageClaim': null,
        'expectedTimeOnBelt': null,
        'checkinAllocations': {
          'checkinAllocations': [
            {
              'startTime': '2017-08-30T02:00:00.000+02:00',
              'endTime': '2017-08-30T04:40:00.000+02:00',
              'rows': {
                'rows': [
                  {
                    'position': '9',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '10',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '11',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '12',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 8,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '13',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 8,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '14',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '15',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '16',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          'remarks': null
        },
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHSW',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803259600,
        'flightName': 'KL4302',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 4302,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '05:10:00',
        'serviceType': 'J',
        'mainFlight': 'CZ0345',
        'codeshares': {
          'codeshares': [
            'KL4302',
            'MF9245'
          ]
        },
        'estimatedLandingTime': '2017-08-30T04:39:41.000+02:00',
        'actualLandingTime': '2017-08-30T04:39:41.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR',
            'EXP'
          ]
        },
        'route': {
          'destinations': [
            'PEK'
          ]
        },
        'terminal': 3,
        'gate': 'F09',
        'baggageClaim': {
          'belts': [
            '15A'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T05:16:15.679+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '330',
          'iatasub': '333'
        },
        'aircraftRegistration': 'B8359',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803062930,
        'flightName': 'KL2569',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'D',
        'flightNumber': 2569,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '05:20:00',
        'serviceType': 'J',
        'mainFlight': 'HV5217',
        'codeshares': {
          'codeshares': [
            'KL2569'
          ]
        },
        'estimatedLandingTime': null,
        'actualLandingTime': null,
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': '2017-08-30T05:21:52.000+02:00',
        'publicFlightState': {
          'flightStates': [
            'DEP'
          ]
        },
        'route': {
          'destinations': [
            'CTA'
          ]
        },
        'terminal': 1,
        'gate': 'D66',
        'baggageClaim': null,
        'expectedTimeOnBelt': null,
        'checkinAllocations': {
          'checkinAllocations': [
            {
              'startTime': '2017-08-30T02:20:00.000+02:00',
              'endTime': '2017-08-30T05:00:00.000+02:00',
              'rows': {
                'rows': [
                  {
                    'position': '9',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '10',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '11',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '12',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 8,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '13',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 8,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '14',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '15',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '16',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          'remarks': null
        },
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHXA',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803150770,
        'flightName': 'KL3099',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'D',
        'flightNumber': 3099,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '05:30:00',
        'serviceType': 'J',
        'mainFlight': 'PS0106',
        'codeshares': {
          'codeshares': [
            'KL3099'
          ]
        },
        'estimatedLandingTime': null,
        'actualLandingTime': null,
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': '2017-08-30T05:34:25.000+02:00',
        'publicFlightState': {
          'flightStates': [
            'DEP'
          ]
        },
        'route': {
          'destinations': [
            'KBP'
          ]
        },
        'terminal': 1,
        'gate': 'E04',
        'baggageClaim': null,
        'expectedTimeOnBelt': null,
        'checkinAllocations': {
          'checkinAllocations': [
            {
              'startTime': '2017-08-30T03:30:00.000+02:00',
              'endTime': '2017-08-30T04:30:00.000+02:00',
              'rows': {
                'rows': [
                  {
                    'position': '8',
                    'desks': {
                      'desks': [
                        {
                          'position': 11,
                          'checkinClass': {
                            'code': '',
                            'description': ''
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          'remarks': null
        },
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73C',
          'iatasub': '73C'
        },
        'aircraftRegistration': 'URGAH',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359802860460,
        'flightName': 'KL0588',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 588,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '05:35:00',
        'serviceType': 'J',
        'mainFlight': 'KL0588',
        'codeshares': {
          'codeshares': [
            'AF8435',
            'DL9477'
          ]
        },
        'estimatedLandingTime': '2017-08-30T05:35:25.000+02:00',
        'actualLandingTime': '2017-08-30T05:35:25.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR'
          ]
        },
        'route': {
          'destinations': [
            'LOS'
          ]
        },
        'terminal': 3,
        'gate': 'E07',
        'baggageClaim': {
          'belts': [
            '15B'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T06:30:58.488+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '330',
          'iatasub': '333'
        },
        'aircraftRegistration': 'PHAKB',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803065300,
        'flightName': 'KL2615',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'D',
        'flightNumber': 2615,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '05:45:00',
        'serviceType': 'J',
        'mainFlight': 'HV6917',
        'codeshares': {
          'codeshares': [
            'KL2615'
          ]
        },
        'estimatedLandingTime': null,
        'actualLandingTime': null,
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': '2017-08-30T05:47:46.000+02:00',
        'publicFlightState': {
          'flightStates': [
            'DEP'
          ]
        },
        'route': {
          'destinations': [
            'OLB'
          ]
        },
        'terminal': 1,
        'gate': 'C11',
        'baggageClaim': null,
        'expectedTimeOnBelt': null,
        'checkinAllocations': {
          'checkinAllocations': [
            {
              'startTime': '2017-08-30T02:45:00.000+02:00',
              'endTime': '2017-08-30T05:25:00.000+02:00',
              'rows': {
                'rows': [
                  {
                    'position': '9',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '10',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '11',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'E',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '12',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 8,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '13',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 8,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '14',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'B',
                            'description': 'Baggage drop-off'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '15',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  },
                  {
                    'position': '16',
                    'desks': {
                      'desks': [
                        {
                          'position': 1,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 2,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 3,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 4,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 5,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 6,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        },
                        {
                          'position': 7,
                          'checkinClass': {
                            'code': 'Y',
                            'description': 'Check-in'
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          'remarks': null
        },
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '73H',
          'iatasub': '73H'
        },
        'aircraftRegistration': 'PHHSB',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803454240,
        'flightName': 'KL6038',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 6038,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '05:50:00',
        'serviceType': 'J',
        'mainFlight': 'DL0070',
        'codeshares': {
          'codeshares': [
            'KL6038',
            '9W8023'
          ]
        },
        'estimatedLandingTime': '2017-08-30T05:04:59.000+02:00',
        'actualLandingTime': '2017-08-30T05:04:59.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR',
            'EXP'
          ]
        },
        'route': {
          'destinations': [
            'ATL'
          ]
        },
        'terminal': 3,
        'gate': 'E09',
        'baggageClaim': {
          'belts': [
            '16A'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T06:06:53.177+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '330',
          'iatasub': '333'
        },
        'aircraftRegistration': 'N806NW',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      },
      {
        'id': 122536359803454220,
        'flightName': 'KL6030',
        'scheduleDate': '2017-08-30',
        'flightDirection': 'A',
        'flightNumber': 6030,
        'prefixIATA': 'KL',
        'prefixICAO': 'KLM',
        'scheduleTime': '05:50:00',
        'serviceType': 'J',
        'mainFlight': 'DL0124',
        'codeshares': {
          'codeshares': [
            'KL6030',
            '9W8026'
          ]
        },
        'estimatedLandingTime': '2017-08-30T05:25:56.000+02:00',
        'actualLandingTime': '2017-08-30T05:25:56.000+02:00',
        'publicEstimatedOffBlockTime': null,
        'actualOffBlockTime': null,
        'publicFlightState': {
          'flightStates': [
            'ARR',
            'EXP'
          ]
        },
        'route': {
          'destinations': [
            'BOS'
          ]
        },
        'terminal': 3,
        'gate': 'E08',
        'baggageClaim': {
          'belts': [
            '16A'
          ]
        },
        'expectedTimeOnBelt': '2017-08-30T06:21:12.111+02:00',
        'checkinAllocations': null,
        'transferPositions': null,
        'aircraftType': {
          'iatamain': '330',
          'iatasub': '333'
        },
        'aircraftRegistration': 'N821NW',
        'airlineCode': 100,
        'expectedTimeGateOpen': null,
        'expectedTimeBoarding': null,
        'expectedTimeGateClosing': null,
        'schemaVersion': '3'
      }
    ];

    return Observable.of(flights);
  }
}
