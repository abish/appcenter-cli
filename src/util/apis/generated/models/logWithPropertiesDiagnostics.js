/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a LogWithPropertiesDiagnostics.
 * @extends models['LogDiagnostics']
 */
class LogWithPropertiesDiagnostics extends models['LogDiagnostics'] {
  /**
   * Create a LogWithPropertiesDiagnostics.
   * @member {object} [properties] Additional key/value pair parameters.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LogWithPropertiesDiagnostics
   *
   * @returns {object} metadata of LogWithPropertiesDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LogWithProperties_Diagnostics',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LogDiagnostics',
        className: 'LogWithPropertiesDiagnostics',
        modelProperties: {
          timestamp: {
            required: true,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          installId: {
            required: true,
            serializedName: 'install_id',
            type: {
              name: 'String'
            }
          },
          device: {
            required: true,
            serializedName: 'device',
            type: {
              name: 'Composite',
              className: 'DeviceDiagnostics'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LogWithPropertiesDiagnostics;
