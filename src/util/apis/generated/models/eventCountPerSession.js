/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a EventCountPerSession.
 */
class EventCountPerSession {
  /**
   * Create a EventCountPerSession.
   * @property {number} [avgCountPerSession]
   * @property {number} [previousAvgCountPerSession]
   * @property {array} [countPerSession]
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventCountPerSession
   *
   * @returns {object} metadata of EventCountPerSession
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventCountPerSession',
      type: {
        name: 'Composite',
        className: 'EventCountPerSession',
        modelProperties: {
          avgCountPerSession: {
            required: false,
            serializedName: 'avg_count_per_session',
            type: {
              name: 'Number'
            }
          },
          previousAvgCountPerSession: {
            required: false,
            serializedName: 'previous_avg_count_per_session',
            type: {
              name: 'Number'
            }
          },
          countPerSession: {
            required: false,
            serializedName: 'count_per_session',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DateTimeDecimalCountsElementType',
                  type: {
                    name: 'Composite',
                    className: 'DateTimeDecimalCounts'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EventCountPerSession;
