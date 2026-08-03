/**
 * Navigation view models.
 *
 * These are deliberately *lightweight projections* of the textbook data: they
 * carry only what navigation UI needs to render (ids, labels, icons) and never
 * the section content itself. Keeping them separate is what allows client
 * components to render navigation without pulling the multi-megabyte textbook
 * repositories into the browser bundle.
 */

/** A single selectable section inside a domain. */
export interface NavSection {
  id: string;
  title: string;
}

/** A domain and its sections, stripped of all content blocks. */
export interface NavDomain {
  id: string;
  title: string;
  shortTitle: string;
  icon?: string;
  sections: NavSection[];
}

/** A flat link rendered in the global drawer. */
export interface NavLink {
  href: string;
  label: string;
}

/** Everything the global sidebar drawer needs to render. */
export interface SidebarNavigation {
  anatomy: NavLink[];
  biology: NavLink[];
  chemistryInorganic: NavLink[];
  chemistryOrganic: NavLink[];
}
