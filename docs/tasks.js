module.exports = {
    paths: {
      '/create': {
        post: {
          tags: ['Tasks'],
          description: 'Crear una nueva tarea',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task',
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Tarea creada exitosamente',
            },
          },
        },
      },
      '/': {
        get: {
          tags: ['Tasks'],
          description: 'Obtener todas las tareas',
          responses: {
            200: {
              description: 'Lista de todas las tareas',
            },
          },
        },
      },
      '/id/{_id}': {
        put: {
          tags: ['Tasks'],
          description: 'Actualizar el título de una tarea',
          parameters: [
            {
              in: 'path',
              name: '_id',
              required: true,
              description: 'ID de la tarea',
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    title: { type: 'string' },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Tarea actualizada exitosamente',
            },
          },
        },
        delete: {
          tags: ['Tasks'],
          description: 'Eliminar una tarea',
          parameters: [
            {
              in: 'path',
              name: '_id',
              required: true,
              description: 'ID de la tarea',
            },
          ],
          responses: {
            200: {
              description: 'Tarea eliminada exitosamente',
            },
          },
        },
      },
    },
  };
  