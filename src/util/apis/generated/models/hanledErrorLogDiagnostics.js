/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Required explicit begin session log (a marker event for analytics service).
 *
 * @extends models['LogDiagnostics']
 */
class HanledErrorLogDiagnostics extends models['LogDiagnostics'] {
  /**
   * Create a HanledErrorLogDiagnostics.
   * @member {uuid} errorId Error ID.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HanledErrorLogDiagnostics
   *
   * @returns {object} metadata of HanledErrorLogDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'handled_error',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LogDiagnostics',
        className: 'HanledErrorLogDiagnostics',
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
          errorId: {
            required: true,
            serializedName: 'error_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HanledErrorLogDiagnostics;
