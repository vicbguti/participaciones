/* ui/components/search-filters.js */

class SearchFilters extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="card filtros-section">
        <h2 class="section-label">Buscar estudiante</h2>
        <div class="filtros-row">
          <div class="filtro-group">
            <label for="filtroNombre">Nombre</label>
            <input type="text" id="filtroNombre" class="input" placeholder="Filtrar por nombre…" />
          </div>
          <div class="filtro-group">
            <label for="filtroApellido">Apellido</label>
            <input type="text" id="filtroApellido" class="input" placeholder="Filtrar por apellido…" />
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('search-filters', SearchFilters);
